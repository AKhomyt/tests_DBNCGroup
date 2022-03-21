import style from './style.module.css';
export const Task4 = ()=> {
    return <div id={style.cont}>
{`
  var server_echo;
  var json = {
      json: JSON.stringify({
          a: 1,
          b: 2
      }),
      delay: 3
  };
  fetch('/echo/', {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
  })
      .then(function (response) {
          server_echo = response.json().echo
          return response.json();
      })
      .then(function (result) {
          alert(result);
      })
      .catch (function (error) {
          console.log('Request failed', error);
      });
  server_echo.forEach(
      element => console.log(element)
  )
  
  Вероятно, на момент обработки циклом, server_echo === undefined
  так как присвоение велось в ответе асинхронного элемента promise.
`}
    </div>
}