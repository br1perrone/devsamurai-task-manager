import React, { useState, useEffect } from "react";

import _ from "lodash";

import { ApiClient, useTranslation } from "adminjs";
import { Box, Text, H2, Loader } from "@adminjs/design-system";

import TaskType from "./cards/TaskType";
import TaskEffort from "./cards/TaskEffort";

import TypeData from "./datas/typeData";
import EffortData from "./datas/effortData";

const makeTypeData = records => {
    if (records.length === 0) return;

    const status = {
        backlog: 'Aguardando',
        doing: 'Em Execução',
        done: 'Feita',
        approved: 'Aprovada',
        rejected: 'Rejeitada',
    }
    const values = _.groupBy(records, (record) => record.params.status);
    const data = _.map(status, (value, key) => [value, values[key]?.length || 0]);

    return [['Situação da Tarefa', 'Quantidade'], ...data];
}

const makeEffortData = records => {
    if (records.length === 0) return;

    const status = {
        backlog: 'Aguardando',
        doing: 'Em Execução',
        done: 'Feita',
        approved: 'Aprovada',
        rejected: 'Rejeitada',
    }
    const values = _.groupBy(records, (record) => {
        const dateParsed = new Date(record.params.due_date.toString());

        return new Date(
            dateParsed.getFullYear(),
            dateParsed.getMonth(),
            dateParsed.getDate()
        );
    });
    const data = _.map(status, (value, key) => {
        const sum = _.sumBy(value, (v) => v.params.effort || 0);
        return [new Date(key), sum];
    });

    return [
        [
            { id: 'Situação da Tarefa', type: 'date' },
            { id: 'Quantidade', type: 'number' },
        ],
        ...data];
}

const api = new ApiClient();

export function Dashboard() {
    const { translateMessage } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});

    const [typeData, setTypeData] = useState({});
    const [effortData, setEffortData] = useState({});

    useEffect(() => {
        setLoading(true);
        setEffortData(EffortData);
        setTypeData(TypeData);

        api.resourceAction({
            resourceId: "tasks",
            actionName: "list",
        }).then(({ data: { records } }) => {
            setTypeData(makeTypeData(records));
            setEffortData(makeEffortData(records));
        });

        api.getDashboard()
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Box>
            <Box position="relative" overflow="hidden">
                <Box bg="grey20" height={284} py={74} px={["default", "lg", 250]}>
                    <Text textAlign="center" color="primary100">
                        <H2>{translateMessage('dashboardTitle')}</H2>
                        <Text opacity="0.8">{translateMessage('dashboardSubtitle')}</Text>
                    </Text>
                </Box>
            </Box>

            <Box
                mt={['xl', 'xl', '-80px']}
                mb="xl"
                mx={[0, 0, 0, "auto"]}
                px={["default", "lg", "xxl", 0]}
                position="relative"
                flex
                flexDirection="row"
                flexWrap="wrap"
                width={[1, 1, 1, 1024]}
            >
                <Box width={[1, 1 / 2, 1 / 2]} p="lg">
                    {loading ?
                        <Loader /> :
                        <TaskType data={typeData} />
                    }
                </Box>
                <Box width={[1, 1 / 2, 1 / 2]} p="lg">
                    {loading ?
                        <Loader /> :
                        <TaskEffort data={effortData} />
                    }
                </Box>
            </Box>
        </Box>
    );
}
