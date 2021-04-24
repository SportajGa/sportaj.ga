import { useMediaQuery } from 'react-responsive';

export enum ScreenType {
	Fullscreen,
	Cols2,
	Cols1
}

export const useScreenType = (): ScreenType => {
	const is2Cols = useMediaQuery({ minWidth: 1265 });
	const is1Cols = useMediaQuery({ minWidth: 800 });

	if (is2Cols) return ScreenType.Cols2;
	if (is1Cols) return ScreenType.Cols1;

	return ScreenType.Fullscreen;
};

export default useScreenType;
