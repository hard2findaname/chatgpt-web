import { Button, Input } from "antd";
import styles from "./auth.module.scss";

import { useNavigate } from "react-router-dom";
import { useAccessStore } from "../../store/access";
import ChatGPTIcon from "../../icons/chatgpt.svg";
export function Auth() {
    const access = useAccessStore();
    return (
        <div className={styles["auth-page"]}>
            <ChatGPTIcon/>
            <div className={styles["auth-title"]}>OpenAiHub</div>
            <div className={styles["auth-sub-title"]}>
                学习AI开发、掌握AI部署、运用AI提效
            </div>
            <img
                src="https://pic.imge.cc/2024/08/01/66ab55740dbe7.png"
                style={{ width: 250 }}
            />
            <div className={styles["auth-tips"]}>
                扫码关注公众号，
                <a
                    href="https://pic.imge.cc/2024/08/01/66ab55740dbe7.png"
                    target="_blank"
                >
                    回复【403】获取访问密码
                </a>
            </div>

            <Input
                className={styles["auth-input"]}
                type="password"
                placeholder="在此处填写访问码"
                value={access.accessCode}
                onChange={(e) => {
                    access.updateCode(e.currentTarget.value);
                }}
                status={access.accessCodeErrorMsgs?'error': ''}

            />
            {access.accessCodeErrorMsgs?<span className={styles['auth-error']}>{access.accessCodeErrorMsgs}</span>:null}


            <div className={styles["auth-actions"]}>
                <Button type="primary" onClick={() => access.login()}>确认登录👣</Button>
                <Button type="text">稍后再说</Button>
            </div>
            <span>
        说明：OpenAI项目开发演示站点
      </span>
        </div>
    );
}
