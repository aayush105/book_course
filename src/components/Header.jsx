import React from "react";
import { Card, CardBody } from "reactstrap";

function Header(){
    return(
        <div>
            <Card className="my-2 bg-dark">
                <CardBody>
                    <h1 className="text-center my-3 text-white">welcome to Course Application</h1>
                </CardBody>
            </Card>
        </div>
    );

}

export default Header;