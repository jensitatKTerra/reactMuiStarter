import gql from "graphql-tag";

export const CHARGER_SUBSCRIPTION = gql`
    subscription MySubscription {
        api_charger {
        id
        device_id
        is_connected
        is_preparing
        status
        }
    }
`

export const CHARGER_QUERY = gql`
    query MyQuery {
        api_charger {
        id
        device_id
        is_connected
        is_preparing
        status
        }
    }
`