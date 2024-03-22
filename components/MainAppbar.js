import React from "react";
import { Appbar } from "react-native-paper";
import App from "../App";

export default function MainAppbar(props){
    return (
        <Appbar.Header
        mode ="center-aligned"
        elevated={true}
        >
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    )
}