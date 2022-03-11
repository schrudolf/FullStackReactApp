const emailHead = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: "Raleway", sans-serif;
    color: black !important;
    background-color: #d8dada;
    font-size: 19px;
    max-width: 800px;
    margin: 0 auto;
    padding: 3%;
  }

  img {
    max-width: 100%;
  }

  header {
    width: 98%;
  }

  #logo {
    max-width: 120px;
    margin: 3% 0 3% 3%;
    float: left;
  }
  #banner img {
    max-height: 300px;
    width: 100%;
  }
  #wrapper {
    background-color: #f0f6fb;
  }
  .social_div {
      text-align: center;
  }
  #social {
    list-style-type: none;
  }

  #social > li {
    display: inline;
  }

  #social > li > a > img {
    max-width: 35px;
  }

  h1,
  p {
    margin: 3%;
  }
  .btn_div {
      width: 100%;
      padding: 1rem;
      text-align: center;
  }
  .btn {
    background-color: #303840;
    min-width: 200px !important;
    color: white !important;
    text-decoration: none;
    font-weight: 800;
    padding: 8px 12px;
    border-radius: 8px;
    letter-spacing: 2px;
  }

  hr {
    height: 1px;
    background-color: #303840;
    clear: both;
    width: 96%;
    margin: auto;
  }

  #contact {
    text-align: center;
    padding-bottom: 3%;
    line-height: 16px;
    font-size: 12px;
    color: #303840;
  }
</style>
</head>`

export default emailHead;