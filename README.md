# 簡易登入介面
實現簡易的登入頁面，檢查帳密是否正確，成功即導向 welcome page，否則顯示錯誤訊息。   
並加入 Cookie-based Authentication，在使用者登入後會紀錄資料，使用者可等 session 自動過期被自動踢出，或是自己點選登出。

![scrrenshot](https://github.com/JessieMosbi/login/blob/master/screenshot.gif?raw=true)

## Requirement
[Node.js](https://nodejs.org/en/)

## Packages
此專案用到以下 JavaScript library，可藉由 `npm install` 指令去安裝（請參考底下 Installing 步驟）   
[express](https://expressjs.com/)   
[express-handlebars](https://www.npmjs.com/package/express-handlebars)   
[body-parser](https://www.npmjs.com/package/body-parser)

***

## Installing
透過 `git clone` 指令將專案下載下來到本機端
```console
git clone https://github.com/JessieMosbi/login.git
```

開啟終端機 (Terminal)，進入 login 資料夾內，並檢查是否有 package.json 檔案
```console
cd login
```

執行 `npm install`，將專案所需套件下載下來
```console
npm install
```

套件安裝完畢後，用專案所設定的統一指令，即可執行專案
```console
npm run dev
```

預設 port 為 3000，請直接打開瀏覽器，並在 URL 輸入 http://localhost:3000/ 即可瀏覽網頁

***

## Features
此簡易登入介面，並無連接資料庫，但可利用程式內建的帳密進行測試
|Name    | Email                            | Password         |
|:------:|:--------------------------------:|:----------------:|
|Tony    | tony<span>@stark.com</span>      | iamironman       |
|Steve   | captain<span>@hotmail.com</span> | icandothisallday |
|Peter   | peter<span>@parker.com</span>    | enajyram         |
|Natasha | natasha<span>@gamil.com</span>   | *parol#@$!       |
|Nick    | nick<span>@shield.com</span>     | password         |
