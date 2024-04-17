import Button from "./Button";

const Page = ({ isLogin }) => {
    const mainMsg = isLogin == true ? '로그인되었습니다.' : '로그인되지 않았습니다.'
    return ( 
        <div>
            <h1>{mainMsg}</h1>
            <Button >로그인하기</Button>
            <Button >회원가입</Button>
        </div>
    );
}

export default Page;