import React from 'react';
import './Invoice.css';

const Invoice = ( props ) => {
    return(
        <tr>
            <td>
                <div>
                    <span className="las la-shopping-cart"></span>
                </div>
            </td>

            <td>
                <div>{props.typeName}</div>
            </td>

            <td>
                <div>{props.dateInvoice}</div>
            </td>

            <td>
                <div>{props.amountInvoice}</div>
            </td>

            <td>
                <div>{props.numberInvoice}</div>
            </td>
        </tr>
    );
}

export default Invoice;

