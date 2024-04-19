import { useCallback, useEffect, useState } from "react";

const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    });

    useEffect(() => {
        if (!form.email && !form.nickname && !form.password && !form.pwd_chk) {
            setForm(form => ({ ...form, validate: false, errMsg: {} }));
        } else if (form.email && form.nickname && form.password && form.pwd_chk && (form.password === form.pwd_chk)) {
            setForm(form => ({ ...form, validate: true,  errMsg: {} }));
        } else if (!form.email) {
            setForm(form => ({ ...form, validate: false, errMsg: { email: '이메일은 필수 입력값입니다.' } })); 
        } else if (!form.nickname) {
            setForm(form => ({ ...form, validate: false, errMsg: { nickname: '닉네임은 필수 입력값입니다.' } }));
        } else if (!form.password) {
            setForm(form => ({ ...form, validate: false, errMsg: { password: '비밀번호는 필수 입력값입니다.' } }));
        } else if (!form.pwd_chk) {
            setForm(form => ({ ...form, validate: false, errMsg: { pwd_chk: '비밀번호 확인은 필수 입력값입니다.' } }));
        } else {
            setForm(form => ({ ...form, validate: false, errMsg: { pwd_chk: '비밀번호가 일치하지 않습니다.' } }));
        }
    }, [form.email, form.nickname, form.password, form.pwd_chk]);

    const reset = useCallback(() => {
        setForm(initialForm)
    }, [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;