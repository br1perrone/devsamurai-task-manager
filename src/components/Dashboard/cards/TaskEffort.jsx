import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import { Card } from "../styles"

import { Text, H5 } from "@adminjs/design-system";
import { useTranslation } from "adminjs";

export function TaskEffort({ data }) {
    const { translateMessage } = useTranslation();

    const options = {
        title: translateMessage('taskEffortCardTitle'),
    }

    return (
        <Card as="a" href="/admin/resources/tasks">
            <Text textAlign="center">
                <H5 mt="lg">{options.title}</H5>
                {data.lenght === 0
                    ? <Text>{ translateMessage('noRecords') }</Text>
                    : <Chart
                        chartType="Calendar"
                        data={data}
                        width={"100%"}
                        height={"100%"}
                        options={options}
                    />
                }
            </Text>
        </Card>
    );
}
