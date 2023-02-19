import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	LeftOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
	RightOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";

import type { MenuProps } from "antd";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { ColorConstant } from "../../constants/ColorConstant";

interface LeftMenuBarProps {
	collapsed: boolean;
	setCollapsed: any;
}
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2", <DesktopOutlined />),
	getItem("Option 3", "3", <ContainerOutlined />),

	getItem("Navigation One", "sub1", <MailOutlined />, [
		getItem("Option 5", "5"),
		getItem("Option 6", "6"),
		getItem("Option 7", "7"),
		getItem("Option 8", "8"),
	]),

	getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
		getItem("Option 9", "9"),
		getItem("Option 10", "10"),

		getItem("Submenu", "sub3", null, [
			getItem("Option 11", "11"),
			getItem("Option 12", "12"),
		]),
	]),
];

const LeftMenuBar: FunctionComponent<LeftMenuBarProps> = (props) => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => {
		props.setCollapsed(!collapsed);
	};
	const { theme } = useContext(ThemeContext);
	const getTheme = (): any => {
		return theme.name == "light" ? "light" : "dark";
	};
	useEffect(() => {
		setCollapsed(props.collapsed);
	});

	return (
		<Sider
			theme={getTheme()}
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
			style={{
				overflow: "auto",
				height: "100%",
				position: "fixed",
				top: 60,
				left: 0,
				textAlign: "center",
			}}
		>
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
				onClick={toggleCollapsed}
				shape="circle"
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			/>
			<Menu
				theme={getTheme()}
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={items}
			/>
		</Sider>
	);
};

export default LeftMenuBar;
