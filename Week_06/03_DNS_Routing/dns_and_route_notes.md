# Task 4 and 5: DNS Lookup and Route Investigation (transcribed from my screenshots)

## DNS lookup (google.com)
- DNS server used: 172.20.10.1#53 (nslookup and dig)
- IPv4 answers: 142.250.129.101, .102, .113, .100, .139, .138
- IPv6 answers (nslookup): 2a00:1450:4009:c0f::8b, ::65, ::8a, ::64
- dig: status NOERROR, 6 answers, TTL 345, query time 88 msec, non-authoritative
- Evidence: W3_03a_DNS_nslookup.png, W3_03b_DNS_dig.png

## Route to example.com
- traceroute (to 172.66.147.243): hop 1 = 10.0.2.2 (12.608, 11.423, 10.313 ms); hops 2 to 30 = * * *
- tracepath: hop 1 = 10.0.2.2 (0.849 ms, 1.375 ms); hops 2 to 30 = no reply; "Too many hops: pmtu 1500"
- Visible (responding) hops: 1
- Evidence: W3_03c_Route_traceroute.png, W3_03d_Route_tracepath.png
