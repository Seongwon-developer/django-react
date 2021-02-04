# django-react
## dictionary configuration/settings
- music_controller
    - api
    - frontend
        - react
        - install modules
            ```
            npm init
            npm install webpack webpack-cli --save-dev
            npm i @babel/core babel-loader @babel/preset-react --save-dev
            npm i react react-dom --save-dev
            npm install @material-ui/core
            npm install @babel/plugin-proposal-class-properties
            npm install @babel/preset-env --save-dev
            npm install react-router-dom
            npm install @material-ui/icons
            ```
            - webpack : 모듈 번들러, 의존성을 가진 모듈들을 다루고 그 모듈들로부터 정적인 asset 생성
                - 모듈 번들러 : 빌드타임(컴파일시간)을 만들어 한개의 js 파일(번들 파일)로 내보낸다. 묶어주는 역할
            - babel : 최신 사양의 자바스크립트 코드를 IE나 구형 브라우저에서도 동작하는 ES5 이하의 코드(트랜드파일링)로 변환
                - babel 사용 시 여러 모듈들을 같이 설치해줘야함
            
        - babel.config.json
            - 의미
        - webpack.config.js
            - 의미
        - package.js
            - "dev": "weboack --mode development --watch",
                - 개발 버전
            - "build": "wwebpack -mode production"
                - 생산 버전
            - "test": "echo \"Error: no test specified\" && exit 1"
                - 테스트 버전
    - music_controller
