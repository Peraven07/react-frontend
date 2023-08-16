
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ModelslistDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.model}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.accuracy}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.auc}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="model" header="Model" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="accuracy" header="Accuracy" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="auc" header="AUC" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="recall" header="Recall" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="precision" header="Precision" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="f1" header="F1" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="kappa" header="Kappa" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="mcc" header="MCC" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="tt" header="TT (sec)" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ModelslistDataTable;