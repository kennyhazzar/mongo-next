import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//     faCompass,
//     faMapMarkedAlt,
//     faUser,
//     faShoppingCart
// } from "@fortawesome/free-solid-svg-icons"

const navButtons = [
    {
        label: "Список статей",
        path: "/all",
    },
    {
        label: "Поиск по названию",
        path: "/search_by_title",
    },
    {
        label: "Поиск по автору",
        path: "/search_by_author",
    },
    {
        label: "Поиск по дате",
        path: "/search_by_date",
    },
    {
        label: "Топ статей",
        path: "/top",
    },
]

export default navButtons