import { Redirect, Route } from "react-router";
import { isAuthenticated } from ".";

export default function PrivateAdmin(props) {
    return (
        <Route
            render={() => {
                if (isAuthenticated() && isAuthenticated().user.id == 1) {
                    return props.children;
                } else {
                    return <Redirect to="/signin" />;
                }
            }}
        />
    )

}