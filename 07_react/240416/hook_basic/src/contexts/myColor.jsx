import { createContext } from "react";

/** Context를 만들고 기본값을 null로 설정했다.
 *  - App.js에서 이 null 값을 myColor와 setMyColor로 지정했다.
 *  - Color에서는 Context를 사용해 myColor를 받아왔다.
 *  - ColorBox내의 ColorSelector에서도 이제 부모로부터 상속받지 않고, myColor와 setMyColor를 받아왔다.
*/
export const MyColorContext = createContext(null)
