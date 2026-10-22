# Task 3: Connectivity Testing (transcribed from my screenshots)

| Destination | Result | Evidence |
|---|---|---|
| 127.0.0.1 | 20 sent, 20 received, 0% loss, rtt min/avg/max 0.065/0.169/0.904 ms | W3_02_Ping.png |
| 10.0.2.15 (own eth0 address) | 8 sent, 8 received, 0% loss, rtt min/avg/max 0.066/0.118/0.384 ms | W3_02_Ping.png |
| 10.0.2.2 (default gateway) | PENDING: screenshot of ping -c 4 10.0.2.2 still to be added | |
| example.com (104.20.23.154) | 4 echo requests and 4 echo replies seen in Wireshark. Terminal ping screenshot still to be added | W3_04b, W3_04c |

Note: hop 1 of traceroute and tracepath was 10.0.2.2 and it replied.
