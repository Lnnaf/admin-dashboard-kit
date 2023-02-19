import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Row, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import {
	FunctionComponent,
	MouseEventHandler,
	useContext,
	useState,
} from "react";

import { ColorConstant } from "../../constants/ColorConstant";
import { ThemeContext } from "../../context/theme/ThemeContext";

interface HeaderProps {}

const HeaderLayout: FunctionComponent<HeaderProps> = (props) => {
	const { theme, updateTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(theme.name == "dark");

	const createIcon = (icon: any, onClickFunc: any): any => {
		return (
			<Button
				type="text"
				size={"large"}
				style={{
					position: "relative",
					color:
						theme.name == "light"
							? ColorConstant.black
							: ColorConstant.light,
				}}
				onClick={onClickFunc}
				shape="circle"
				icon={icon}
			/>
		);
	};
	const switchTheme = () => {
		setIsDarkMode(!isDarkMode);
		updateTheme(!isDarkMode);
	};
	return (
		<Header
			style={{
				padding: 0,
				background: ColorConstant.dark,
				position: "fixed",
				width: "100vw",
				height: 60,
				top: 0,
				left: 0,
			}}
		>
			<Row>
				<Col span={12}>
					<div style={{ height: 30, margin: 10, float: "left" }}>
						<img src="vite.svg" alt="" />
					</div>
				</Col>
				<Col span={12}>
					<div style={{ float: "right", marginRight: 20 }}>
						<Switch
							className="switch-theme"
							checkedChildren="Dark"
							unCheckedChildren="Light"
							defaultChecked={isDarkMode}
							onChange={switchTheme}
						/>
						{createIcon(<BellOutlined />, () => {})}
						{createIcon(<UserOutlined />, () => {})}
					</div>
				</Col>
			</Row>
			<div
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			></div>
		</Header>
	);
};

export default HeaderLayout;
