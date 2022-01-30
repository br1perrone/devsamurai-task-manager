import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import {Card} from "../styles"

import {Text, H5} from "@adminjs/design-system";

const options = {
    title: "Tarefas x Esforço",
}

export function TaskEffort({data}) {
    // const [value, setValue] = useState<string>('');

    // useEffect(() => {
    //     (async ()=> {
    //         const res = await fetch('http://localhost:3333/api/list');
    //         const json = await res.json();
    //         setValue(JSON.stringify(json));
    //     })();
    // }, []);

    return (
        <Card as="a" href="#">
            <Text textAlign="center">
                <H5>Título</H5>
                <Text>
                    <Chart
                        chartType="Calendar"
                        data={data}
                        width={"100%"}
                        height={"100%"}
                        options={options}
                    />
                </Text>
            </Text>
        </Card>
    );
}
