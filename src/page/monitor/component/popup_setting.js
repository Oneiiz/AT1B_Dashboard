import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
export default function PopupSetting({ open, onClose }) {
  const [excelFile, setExcelFile] = useState(null);
  const [rows, setRows] = useState([]); // Your data for DataGrid
  const columns = [
    { field: "date", headerName: "Target Date", width: 130, filterable: true },
    {
      field: "morning",
      headerName: "Target Morning",
      width: 130,
      filterable: true,
    },
    {
      field: "afternoon",
      headerName: "Target Afternoon",
      width: 150,
      filterable: true,
    },
    {
      field: "night",
      headerName: "Target Night",
      width: 130,
      filterable: true,
    },
    {
      field: "edit",
      headerName: "",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <Button
          size="small"
          onClick={() => {
            /* handle edit */
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  useEffect(() => {
    setRows([
      { id: 1, date: "01-Jul-2025", morning: 300, afternoon: 666, night: 330 },
      { id: 2, date: "30-Jun-2025", morning: 350, afternoon: 300, night: 330 },
    ]);
  }, []);
  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };
  const handleUpload = () => {
    
  };
  const handleExport = () => {
    
  };
  return (
    <Dialog
    PaperProps={{
      className: "pop-setting",
      style: { width: "50vw", height: "80vh", maxWidth: "50vw", maxHeight: "80vh", padding: 10 }
    }}
    open={open}
    onClose={onClose}
  >
    <DialogTitle>AT1B Daily Target</DialogTitle>
    <DialogContent
      style={{
        height: "calc(80vh - 100px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 0,
      }}
    >
      <div
        style={{
          background: "#7be89a",
          padding: 16,
          borderRadius: 6,
          marginBottom: 16,
        }}
      >
        <label style={{ fontWeight: "bold" }}>
          Choose Excel File:
          <input
            type="file"
            accept=".xlsx,.xls"
            style={{ marginLeft: 8 }}
            onChange={handleFileChange}
          />
        </label>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          style={{ marginLeft: 16, marginRight: 16 }}
          onClick={handleUpload}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<FileDownloadIcon />}
          onClick={handleExport}
        >
          Export Excel
        </Button>
      </div>
      <div style={{ flex: 1, width: "100%", background: "#fff" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 30, 100]}
          checkboxSelection={false}
          disableSelectionOnClick
          filterModel={{
            items: [],
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
  );
}
