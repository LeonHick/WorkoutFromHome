import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const noBorder = { borderBottom: "none" };

export default function RoutineTable({ rows, headers, style }) {
  const adjustPadding = window.innerWidth <= 350;
  return (
    <Table
      padding={adjustPadding ? "none" : "normal"}
      size="small"
      style={{ borderStyle: "solid", borderWidth: 2, ...style }}
    >
      <TableHead>
        <TableRow>
          {headers.map((header, i) => (
            <TableCell style={{ textAlign: i !== 0 ? "center" : "left" }}>
              <Typography
                style={{
                  fontWeight: "bold",
                  ...(adjustPadding && { padding: 10 }),
                }}
              >
                {capitalizeFirstLetter(header)}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          const borders = row.other ? { borderBottom: "none" } : {};
          return (
            <>
              <TableRow>
                {headers.map((header, i) => (
                  <TableCell
                    style={{
                      width: `${
                        ((i === 0 ? 2 : 1) * 100) / (headers.length + 1)
                      }%`,
                      textAlign: i !== 0 ? "center" : "left",
                      ...borders,
                      ...(adjustPadding && { padding: 10 }),
                    }}
                  >
                    <Typography>{row[header]}</Typography>
                  </TableCell>
                ))}
              </TableRow>
              {row.other && (
                <TableRow>
                  <TableCell colSpan={1} />
                  <TableCell colSpan={2} style={{ textAlign: "center" }}>
                    {row.other}
                  </TableCell>
                </TableRow>
              )}
            </>
          );
        })}
      </TableBody>
    </Table>
  );
}
