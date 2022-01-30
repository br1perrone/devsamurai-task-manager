import React, { useState, useEffect } from "react";

import { ApiClient, useTranslation } from "adminjs";
import { Box, Text, H2, Loader } from "@adminjs/design-system";

import TaskType from "./cards/TaskType";
import TaskEffort from "./cards/TaskEffort";

import TypeData from "./datas/typeData";
import EffortData from "./datas/effortData";

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
                width={[1,1,1,1024]}
            >
                <Box width={[1,1/2,1/2]} p="lg">
                    {loading ?
                        <Loader /> :
                        <TaskType data={typeData} />
                    }
                </Box>
                <Box width={[1,1/2,1/2]} p="lg">
                    {loading ?
                        <Loader /> :
                        <TaskEffort data={effortData} />
                    }
                </Box>
            </Box>
        </Box>
    );
}
