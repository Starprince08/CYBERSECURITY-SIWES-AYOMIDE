# Week 3: Basic Network Discovery and Traffic Analysis

Cybersecurity SIWES Training, Axiahub. Student: Ayeni Ayomide Caleb, University of Jos.

Environment: Kali Linux (VirtualBox). Tools: ip, ping, nslookup, dig, traceroute, tracepath, Wireshark.
All work was done on my own workstation against example.com and google.com only. No scanning tools were used.

## Contents
| Folder or file | What it holds |
|---|---|
| Week_03_Report.docx | Full project report |
| 01_Network_Configuration | Hostname, interface, IP, MAC, gateway and DNS notes |
| 02_Connectivity | Ping test notes |
| 03_DNS_Routing | DNS lookup and route trace notes |
| 04_Wireshark | ICMP and DNS capture analysis notes |
| 05_Network_Diagram | Network diagram (PNG) |
| 06_Evidence | All screenshots |

## Key findings
- Active interface eth0, 10.0.2.15/24, MAC 08:00:27:b4:a1:05, default gateway 10.0.2.2
- DNS server 172.20.10.1; google.com returned six IPv4 addresses
- traceroute: only hop 1 (10.0.2.2) replied; ICMP echo to example.com (104.20.23.154) was answered, shown in Wireshark
