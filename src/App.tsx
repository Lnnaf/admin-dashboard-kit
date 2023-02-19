import React, { useContext, useEffect, useState } from "react";
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import LeftMenuBar from "./components/layouts/LeftMenuBar";
import MainContent from "./components/layouts/MainContent";
import FooterLayout from "./components/layouts/FooterLayout";
import HeaderLayout from "./components/layouts/HeaderLayout";
import { ThemeContext } from "./context/theme/ThemeContext";
import { ColorConstant } from "./constants/ColorConstant";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2", <DesktopOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8"),
	]),
	getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const { theme } = useContext(ThemeContext);
	useEffect(() => {
		document.body.style.backgroundColor =
			theme.name == "light"
				? ColorConstant.bg_light
				: ColorConstant.bg_dark;
	}, [theme]);

	return (
		<div style={{ backgroundColor: "red" }}>
			<Layout hasSider>
				<LeftMenuBar
					collapsed={collapsed}
					setCollapsed={setCollapsed}
				/>
				<Layout
					className="site-layout"
					style={{
						backgroundColor:
							theme.name == "dark"
								? ColorConstant.bg_dark
								: ColorConstant.bg_light,
						color: "black",
					}}
				>
					<HeaderLayout />
					<MainContent collapsed={collapsed} />
					<FooterLayout collapsed={collapsed} />
				</Layout>
			</Layout>
		</div>
	);
};

export default App;
