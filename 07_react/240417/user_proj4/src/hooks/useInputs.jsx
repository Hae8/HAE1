import { useCallback, useState } from "react";

/**CUSTOM HOOK
 * - 일반적으로 hooks 폴더 안에 use를 붙여서 만드는 함수
 * - CUSTOM HOOK 안에서 다른 HOOK을 사용할 수 있다.
 * 
 * 장점
 * : 컴포넌트에 공통적으로 사용되는 로직을 함수로 뽑아내어 가독성과 유지보수성이 높아진다.
 */
const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}))
    });

    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset]
}

export default useInputs;