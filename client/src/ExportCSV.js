import React from 'react';
import { CSVLink } from "react-csv";

const ExportCSV = (props) => {
    if (props.data) {
        if (props.data[0]) {
            return (
                <div>
                    <span>
                        <CSVLink
                            data={props.data}
                            filename={"rushing-stats.csv"}
                        >Download CSV
                </CSVLink>
                    </span>
                </div>
            )
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}


export default ExportCSV;