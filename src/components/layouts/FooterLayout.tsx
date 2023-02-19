import { Footer } from "antd/es/layout/layout";
import { FunctionComponent, useContext } from "react";
import { ColorConstant } from "../../constants/ColorConstant";
import { ThemeContext } from "../../context/theme/ThemeContext";

interface FooterLayoutProps {
	collapsed: boolean;
}

const FooterLayout: FunctionComponent<FooterLayoutProps> = (props) => {
	const { theme } = useContext(ThemeContext);
	return (
		<Footer
			style={{
				textAlign: "center",
				marginLeft: props.collapsed ? 90 : 210,
				background:
					theme.name == "light"
						? ColorConstant.bg_light
						: ColorConstant.bg_dark,
			}}
		>
			Ant Design ©2018 Created by Ant UED
		</Footer>
	);
};

export default FooterLayout;
