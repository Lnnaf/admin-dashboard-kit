import { Content } from "antd/es/layout/layout";
import React, { useContext, useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorConstant } from "../../constants/ColorConstant";
import { ThemeContext } from "../../context/theme/ThemeContext";
import HomeView from "../../views/Home";

interface MainContentProps {
	collapsed: boolean;
}

const MainContent: FunctionComponent<MainContentProps> = (props) => {
	const { theme } = useContext(ThemeContext);
	return (
		<Content
			className="content-layout"
			style={{
				minHeight: "90vh",
				marginLeft: props.collapsed ? 90 : 210,
				marginTop: 70,
				backgroundColor:
					theme.name == "light"
						? ColorConstant.panel_item_light
						: ColorConstant.panel_item_dark,
				color:
					theme.name == "light"
						? ColorConstant.black
						: ColorConstant.light,
			}}
		>
			<Routes>
				<Route path="" element={<HomeView />} />
			</Routes>
		</Content>
	);
};

export default MainContent;
