import React from "react";
import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import "./Monitor.css"; // Assuming you have a CSS file for additional styles
import goodFeedbackImg from "./image/good-feedback.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PopupSetting from "./component/popup_setting";
export default function Monitor() {
  const [refreshCountdown, setRefreshCountdown] = useState(600); // 10 minutes
  const [lastRefresh, setLastRefresh] = useState(null);
  const [tmItem, setTmItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // ...inside your Monitor component...
  const [openSettings, setOpenSettings] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [authError, setAuthError] = useState("");
  const paperdata2 = [
    { hour: "23 - 00", value: 66 },
    { hour: "00 - 01", value: 51 },
    { hour: "01 - 02", value: 76 },
    { hour: "02 - 03", value: 61 },
    { hour: "03 - 04", value: 68 },
    { hour: "04 - 05", value: 20 },
    { hour: "05 - 06", value: 93 },
    { hour: "06 - 07", value: 61 },
    { hour: "07 - 08", value: 23 },
    { hour: "08 - 09", value: 90 },
    { hour: "09 - 10", value: 69 },
    { hour: "10 - 11", value: 49 },
    { hour: "11 - 12", value: 62 },
    { hour: "12 - 13", value: 97 },
    { hour: "13 - 14", value: 95 },
    { hour: "14 - 15", value: 78 },
    { hour: "15 - 16", value: 86 },
    { hour: "16 - 17", value: 68 },
    { hour: "17 - 18", value: 54 },
    { hour: "18 - 19", value: 50 },
    { hour: "19 - 20", value: 64 },
    { hour: "20 - 21", value: 19 },
    { hour: "21 - 22", value: 0 },
    { hour: "22 - 23", value: 19 },
  ];
  const monthlyData = [
    {
      date: "01-Jun-2025",
      cut: 401,
      morning: 370,
      afternoon: 528,
      total: 1299,
      target: 980,
    },
    {
      date: "02-Jun-2025",
      cut: 451,
      morning: 463,
      afternoon: 614,
      total: 1528,
      target: 980,
    },
    {
      date: "03-Jun-2025",
      cut: 532,
      morning: 0,
      afternoon: 0,
      total: 532,
      target: 980,
    },
    {
      date: "04-Jun-2025",
      cut: 0,
      morning: 306,
      afternoon: 306,
      total: 612,
      target: 980,
    },
    {
      date: "05-Jun-2025",
      cut: 0,
      morning: 298,
      afternoon: 365,
      total: 663,
      target: 980,
    },
    {
      date: "06-Jun-2025",
      cut: 411,
      morning: 290,
      afternoon: 0,
      total: 701,
      target: 980,
    },
    {
      date: "07-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "08-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "09-Jun-2025",
      cut: 268,
      morning: 470,
      afternoon: 525,
      total: 1263,
      target: 980,
    },
    {
      date: "10-Jun-2025",
      cut: 471,
      morning: 548,
      afternoon: 731,
      total: 1750,
      target: 980,
    },
    {
      date: "11-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "12-Jun-2025",
      cut: 496,
      morning: 563,
      afternoon: 341,
      total: 1400,
      target: 980,
    },
    {
      date: "13-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "14-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "15-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "16-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "17-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "18-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "19-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "20-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "21-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
    {
      date: "22-Jun-2025",
      cut: 0,
      morning: 0,
      afternoon: 0,
      total: 0,
      target: 980,
    },
  ];
  // Split monthlyData into two columns
  const firstColumnData = monthlyData.slice(0, 15);
  const secondColumnData = monthlyData.slice(15);
  // Calculate the max number of rows between the two columns
  const maxRows = Math.max(firstColumnData.length, secondColumnData.length);
  const getRow = (row, idx) => (
    <tr
      key={idx}
      style={{
        background: idx % 2 === 0 ? "#f6f7fa" : "#e9eef6",
        height: 20,
      }}
    >
      <td
        style={{
          padding: 6,
          fontWeight: "bold",
          color: "#222",
          height: 20,
          width: 60,
          whiteSpace: "nowrap",
        }}
      >
        {row?.date || ""}
      </td>
      <td
        style={{
          padding: 6,
          textAlign: "center",
          height: 20,
          width: 60,
          whiteSpace: "nowrap",
        }}
      >
        {row?.cut ?? ""}
      </td>
      <td
        style={{
          padding: 6,
          textAlign: "center",
          height: 20,
          width: 60,
          whiteSpace: "nowrap",
        }}
      >
        {row?.morning ?? ""}
      </td>
      <td
        style={{
          padding: 6,
          textAlign: "center",
          height: 20,
          width: 60,
          whiteSpace: "nowrap",
        }}
      >
        {row?.afternoon ?? ""}
      </td>
      <td
        style={{
          padding: 6,
          textAlign: "center",
          fontWeight: "bold",
          height: 20,
          width: 60,
          whiteSpace: "nowrap",
        }}
      >
        {row?.total ?? ""}
      </td>
      <td
        style={{
          padding: 6,
          textAlign: "center",
          fontWeight: "bold",
          height: 20,
          width: 60,
          whiteSpace: "nowrap",
        }}
      >
        {row?.target ?? ""}
      </td>
    </tr>
  );
  // Set maxPaperValue to at least 500 for bar normalization
  const maxPaperValue = Math.max(...paperdata2.map((item) => item.value), 500);
  const coldata = [
    {
      col: "",
    },
    {
      col: "ยอดผลิต",
    },
    {
      col: "เป้าหมาย",
    },
    {
      col: (
        <div>
          <span style={{ fontStyle: "italic", color: "#888" }}>Night</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#222" }}>23.00</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#222" }}>07.00</span>
        </div>
      ),
    },
    {
      col: "0",
    },
    {
      col: "330",
    },
    {
      col: (
        <div>
          <span style={{ fontStyle: "italic", color: "#888" }}>Morning</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#222" }}>07.00</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#222" }}>15.00</span>
        </div>
      ),
    },
    {
      col: "0",
    },
    {
      col: "330",
    },
    {
      col: (
        <div>
          <span style={{ fontStyle: "italic", color: "#888" }}>Afternoon</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#222" }}>15.00</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#222" }}>23.00</span>
        </div>
      ),
    },
    {
      col: "0",
    },
    {
      col: "330",
    },
    {
      col: <span style={{ fontWeight: "bold", color: "#222" }}>รวม</span>,
    },
    {
      col: "0",
    },
    {
      col: "980",
    },
  ];

  useEffect(() => {
    // fetch_master_product(tmItem);
    // // Use a function to always get the latest tmItem
    // const interval = setInterval(() => {
    //   fetch_master_product(tmItem);
    //   setRefreshCountdown(600); // 10 minutes
    // }, 600000);
    // const countdownInterval = setInterval(() => {
    //   setRefreshCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    //   clearInterval(countdownInterval);
    // };
    setLastRefresh(new Date()); // Set last refresh time
  }, [tmItem]);
  const auth_login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5100/api/login_user",
        { username, password }
      );
      return response;
    } catch (error) {
      return { data: { data: { message: "error" } } };
    }
  };
  return (
    <div>
      <Card
        className="card-border"
        style={{ margin: "10px 10px 0 10px", height: "70px", paddingTop: 5 }}
      >
        <div className="card-refresh-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={goodFeedbackImg}
              alt="Good Feedback"
              style={{
                height: 60,
                verticalAlign: "middle",
                marginLeft: 12,
                marginTop: 3,
              }}
            />
            <span
              style={{
                marginLeft: 12,
                fontWeight: "bold",
                fontSize: 35,
                color: "#1976d2",
              }}
            >
              AT1B Daily Performance
            </span>
          </div>
          <span style={{ marginLeft: 16, fontSize: 35, color: "black" }}>
            {lastRefresh && (
              <>
                อัปเดตล่าสุด:{" "}
                {lastRefresh.toLocaleString("th-TH", { hour12: false })}
              </>
            )}
            <span
              style={{
                marginLeft: 16,
                color: "#1976d2",
                fontWeight: "bold",
                marginRight: 1,
              }}
            >
              {refreshCountdown > 0
                ? `รีเฟรชอัตโนมัติใน ${Math.floor(refreshCountdown / 60)}:${(
                    refreshCountdown % 60
                  )
                    .toString()
                    .padStart(2, "0")} นาที`
                : ""}
            </span>
            <span>
              <IconButton
                aria-label="settings"
                size="large"
                sx={{ marginRight: 1, verticalAlign: "middle" }}
                onClick={() => setOpenAuth(true)}
              >
                <SettingsIcon fontSize="inherit" />
              </IconButton>
            </span>
          </span>
        </div>
      </Card>
      <div className="content-container">
        <Card
          className="card-border"
          sx={{ flex: 1, minWidth: 275, padding: 2, margin: 0 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 4,
            }}
          >
            <CalendarMonthIcon sx={{ color: "#1976d2", fontSize: 50 }} />
            <div style={{ flex: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  format="DD-MMM-YYYY"
                  slotProps={{
                    textField: {
                      size: "large",
                      fullWidth: true,
                      sx: { fontSize: 40, width: "100%" },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
          <hr
            style={{
              marginBottom: 10,
              height: 2,
              backgroundColor: "#ccc",
              border: "none",
            }}
          />
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              maxHeight: "calc(100vh - 220px)",
              padding: "2px 4px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "50px repeat(4, 1fr)",
              gap: "8px",
              height: "100%",
            }}
          >
            {coldata.map((item, idx) => {
              // Header row
              if (idx < 3) {
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 28,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {item.col}
                  </div>
                );
              }
              // Shift name cells (italic, gray)
              if ([3, 6, 9].includes(idx)) {
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontStyle: "italic",
                      color: "#888",
                      fontSize: "1.4vw",
                      lineHeight: 1.2,
                      whiteSpace: "pre-line",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {item.col}
                  </div>
                );
              }
              if ([12].includes(idx)) {
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontStyle: "italic",
                      color: "#888",
                      fontSize: "3vw",
                      lineHeight: 1.2,
                      whiteSpace: "pre-line",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {item.col}
                  </div>
                );
              }
              // Production value cells (red 0s)
              if ([4, 7, 10, 13].includes(idx)) {
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "4.5vw",
                      color: "#d90000",
                      background: "#ffd6d6",
                      borderRadius: 16,
                      width: "90%",
                      height: "90%",
                      margin: "auto",
                    }}
                  >
                    {item.col}
                  </div>
                );
              }
              // Target/summary cells (bold, black)
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "4vw",
                    color: "#222",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {item.col}
                </div>
              );
            })}
          </div>
        </Card>
        <Card
          className="card-border"
          sx={{
            flex: 0.8,
            minWidth: 275,
            padding: 2,
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="card-header">ยอดผลิต / รายชั่วโมง</div>
          <hr
            style={{
              marginBottom: 10,
              height: 2,
              backgroundColor: "#ccc",
              border: "none",
              display: "block", // Add this line
              width: "100%", // Optional, ensures full width
              marginTop: 0, // Optional, removes top margin
            }}
          />
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)", // Adjust 180px as needed for your header/footer
              padding: "2px 4px",
            }}
          >
            {paperdata2.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                {/* Hour label */}
                <div
                  style={{
                    width: 60,
                    fontSize: 14,
                    color: "#444",
                    flexShrink: 0,
                  }}
                >
                  {item.hour}
                </div>
                {/* Value */}
                <div
                  style={{
                    width: 32,
                    textAlign: "right",
                    fontWeight: "bold",
                    color: "#009ecb",
                    marginRight: 8,
                  }}
                >
                  {item.value}
                </div>
                {/* Bar */}
                <div
                  style={{
                    height: 18,
                    background:
                      "linear-gradient(90deg, #1de9b6 0%, #00bcd4 100%)",
                    borderRadius: 8,
                    width: `${(item.value / maxPaperValue) * 100}%`,
                    minWidth: 8,
                    transition: "width 0.3s",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </Card>
        <Card
          className="card-border"
          sx={{
            flex: 2,
            minWidth: 275,
            padding: 2,
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="card-header">ยอดผลิต / รายเดือน</div>
          <hr
            style={{
              marginBottom: 10,
              height: 2,
              backgroundColor: "#ccc",
              border: "none",
              display: "block",
              width: "100%",
              marginTop: 0,
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
            <FormControl sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="month-label">เดือน</InputLabel>
              <Select
                labelId="month-label"
                id="month-select"
                value={selectedDate.month()}
                label="เดือน"
                onChange={(e) =>
                  setSelectedDate(selectedDate.month(Number(e.target.value)))
                }
                size="large"
                fullWidth
              >
                {Array.from({ length: 12 }).map((_, idx) => (
                  <MenuItem key={idx} value={idx}>
                    {dayjs().month(idx).format("MMMM")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="year-label">ปี (ค.ศ.)</InputLabel>
              <Select
                labelId="year-label"
                id="year-select"
                value={selectedDate.year()}
                label="ปี (ค.ศ.)"
                onChange={(e) =>
                  setSelectedDate(selectedDate.year(Number(e.target.value)))
                }
                size="large"
                fullWidth
              >
                {Array.from({ length: 5 }).map((_, idx) => {
                  const year = dayjs().year() - 2 + idx;
                  return (
                    <MenuItem key={year} value={year}>
                      {year} {/* Show as ค.ศ. */}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <div
            style={{
              display: "flex",
              gap: 16,
              width: "100%",
              overflowX: "auto",
            }}
          >
            {/* First column */}
            <table
              style={{
                width: "100%",
                background: "#f6f7fa",
                borderRadius: 8,
                tableLayout: "auto", // Let browser auto-size columns
              }}
            >
              <thead>
                <tr style={{ background: "#dbe6f6" }}>
                  <th style={{ padding: 6, fontWeight: "bold" }}>วันที่</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>ดึก</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>เช้า</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>บ่าย</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>ยอดผลิต</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>เป้าหมาย</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: maxRows }).map((_, idx) =>
                  getRow(firstColumnData[idx], idx)
                )}
              </tbody>
            </table>
            {/* Second column */}
            <table
              className="month-table"
              style={{
                width: "100%",
                background: "#f6f7fa",
                borderRadius: 8,
                tableLayout: "auto", // Let browser auto-size columns
              }}
            >
              <thead>
                <tr style={{ background: "#dbe6f6" }}>
                  <th style={{ padding: 6, fontWeight: "bold" }}>วันที่</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>ดึก</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>เช้า</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>บ่าย</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>ยอดผลิต</th>
                  <th style={{ padding: 6, fontWeight: "bold" }}>เป้าหมาย</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: maxRows }).map((_, idx) =>
                  getRow(secondColumnData[idx], idx)
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
      <Dialog
        open={openAuth}
        onClose={() => setOpenAuth(false)}
        PaperProps={{ style: { minWidth: 350 } }}
      >
        <DialogTitle>เข้าสู่ระบบเพื่อแก้ไขเป้าหมาย</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            fullWidth
            value={authUser}
            onChange={(e) => setAuthUser(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={authPass}
            onChange={(e) => setAuthPass(e.target.value)}
          />
          {authError && (
            <div style={{ color: "red", marginTop: 8 }}>{authError}</div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAuth(false)}>Cancel</Button>
          <Button
            onClick={async () => {
              const res = await auth_login(authUser, authPass);
              debugger;
              if (res.data?.message === "Login successful") {
                setOpenAuth(false);
                setOpenSettings(true);
                setAuthError("");
                setAuthUser("");
                setAuthPass("");
              } else {
                setAuthError("Username or password incorrect");
              }
            }}
            variant="contained"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <PopupSetting
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      />
    </div>
  );
}
