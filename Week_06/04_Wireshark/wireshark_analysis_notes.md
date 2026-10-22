# Task 6 and 7: Wireshark Analysis (transcribed from my screenshots)

## ICMP (filter: icmp), interface eth0, 23 packets captured, 8 displayed
| Item | Echo Request | Echo Reply |
|---|---|---|
| Frame number | 18 | 19 |
| Source | 10.0.2.15 | 104.20.23.154 |
| Destination | 104.20.23.154 | 10.0.2.15 |
| Protocol | ICMP | ICMP |
Evidence: W3_04a, W3_04b, W3_04c

## DNS (filter: dns), interface eth0, 34 packets captured, 8 displayed
| Item | Query | Response |
|---|---|---|
| Source | fd17:625c:f037:2:7f78:985:270f:60e8 | fd17:625c:f037:2::3 |
| Destination | fd17:625c:f037:2::3 | my workstation (IPv6) |
| Domain | example.com (type A) | example.com |
| Returned IPs | none | 172.66.147.243 and 104.20.23.154 |

Also seen: six IPv4 queries from 10.0.2.15 to 172.20.10.1 (IDs 0x110f and 0x8167, each sent three times). No reply from 172.20.10.1 appears under the dns filter in this capture.
Evidence: W3_05a, W3_05b
