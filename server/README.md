## 권한 설정

JSON Server Auth가 제공하는 라우트 미들웨어를 제공합니다. ([참고](https://github.com/jeremyben/json-server-auth?search=1%23authorization-flow-%EF%B8%8F#setup-permissions-))

`664` = 리소스 소유자 권한 + 로그인 한 사용자 권한 + 공용 사용자 권한

- 6 → 읽기/쓰기
- 4 → 읽기
- 0 → 권한 없음


| 라우트 | 리소스 권한
| --- | ---
| `/664/*` | 리소스를 쓰려면 사용자가 로그인해야 합니다. 누구나 리소스를 읽을 수 있습니다.
| `/660/*` | 리소스를 쓰거나 읽으려면 사용자가 로그인해야 합니다.
| `/644/*` | 리소스를 쓰려면 사용자가 리소스를 소유해야 합니다. 누구나 리소스를 읽을 수 있습니다.
| `/640/*` | 리소스를 쓰려면 사용자가 리소스를 소유해야 합니다. 리소스를 읽으려면 사용자가 로그인해야 합니다.
| `/600/*` | 사용자가 리소스를 쓰거나 읽으려면 리소스를 소유해야 합니다.
| `/444/*` | 아무도 리소스를 쓸 수 없습니다. 누구나 리소스를 읽을 수 있습니다.
| `/440/*` | 아무도 리소스를 쓸 수 없습니다. 리소스를 읽으려면 사용자가 로그인해야 합니다.
| `/400/*` | 아무도 리소스를 쓸 수 없습니다. 리소스를 읽으려면 사용자가 리소스를 소유해야 합니다.