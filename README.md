개발자 과제 안내 (웹어플리케이션)
==========================
### 주의사항 ###
- 과제 내용 및 소스코드는 외부 유출을 금지합니다.
	- 개인 github에 public으로 등록할 수 없습니다.
- 서버 설정, 기본 라우팅 등은 구현되어있습니다.
- 코드를 읽고 실행해보며 전체 구조를 파악하고 비어있는 기능을 채워나가면 됩니다.
- 구현할 함수들은 **주로 작성할 파일들**에 주석으로 표시되어있습니다.
- 주어진 코드는 참고용이며 필요에 따라 NPM, 파일, 함수 등을 추가해도 좋습니다.

### 개발환경 ###
- 구름IDE에서 개발합니다.
- 몽고DB를 설치합니다. `apt-get install mongodb`
- 몽고DB가 사용하는 기본 데이터 디렉토리를 생성합니다. `mkdir -p /data/db`
- 프로젝트를 받은 디렉토리에서 Node Module을 설치합니다. `npm install`
- 웹 서버를 실행합니다. `node app.js` 또는 `npm run`
- 브라우저에서 접속을 위해 [도움말](http://help.goorm.io/learn/lecture/bGVjX1VpSGFmXzE0NzI2MzYyOTEyOTU=/lesson/bGVzX0hTaUdSXzE0NzI2NDgzODk1NDM=)을 참고하여 도메인을 등록해주세요.
	- 포트는 3000번 포트로 실행됩니다.

### 주요 기능 ###
- 회원가입/로그인 (구현되어있음)
- 채팅 (전체/귓속말)
- 파일 업로드 (zip/tar)
- 코드 실행 (.c, .cpp, .py 파일만)

### 주로 작성할 파일들 ###
- public/javascripts/chat.js
- public/javascripts/file-manager.js
- routes/chat.js
- routes/compiler.js
- routes/upload.js
- views/main.ejs