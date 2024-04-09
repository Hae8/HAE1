import './App.css';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <div>
          <h1>게시판 화면</h1>
            <div className = "board">
                  <table className = "board_table">
                    <tr>
                        <th>글 번호</th>
                        <th>내용</th>
                        <th>작성자 아이디</th>
                        <th>작성자 이름</th>
                        <th>수정, 삭제</th>
                        <th>해시태그</th>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus corrupti asperiores libero odio, natus ipsa possimus error fugit, assumenda sed debitis blanditiis, earum officia magni recusandae consequuntur accusamus similique.</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi eos consequuntur fugiat odio animi iure nobis maiores ea reiciendis et odit a in eum, assumenda recusandae deleniti suscipit veniam officia?</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                  </table>
              </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;