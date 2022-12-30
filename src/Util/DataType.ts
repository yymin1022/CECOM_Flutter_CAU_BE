export interface API_DATA {
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: LIBRARY_DATA | MEAL_DATA | NOTICE_DATA | SCHEDULE_DATA
}

export interface LIBRARY_DATA {
    LIBRARY_DATA: Array<LIBRARY_VALUE>
}

export interface LIBRARY_VALUE {
    LIBRARY_NAME: string,
    CNT_REMAIN: number,
    CNT_USING: number
}

export interface MEAL_DATA {
    MEAL_DATA: Array<MEAL_VALUE>
}

export interface MEAL_VALUE {
    MEAL_NAME: string,
    MENU_DATA: Array<string>
}

export interface NOTICE_DATA {

}

export interface SCHEDULE_DATA {

}