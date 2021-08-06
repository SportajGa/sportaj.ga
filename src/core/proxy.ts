import { FacebookPictureProxy } from './constants';

export function proxyFBIcon(original: string) {
	const { hostname, searchParams } = new URL(original);
	if (hostname === 'platform-lookaside.fbsbx.com') {
		const asid = searchParams.get('asid');
		const height = searchParams.get('height');
		const width = searchParams.get('width');
		const ext = searchParams.get('ext');
		const hash = searchParams.get('hash');

		return `${FacebookPictureProxy}?asid=${asid}&height=${height}&width=${width}&ext=${ext}&hash=${hash}`;
	}

	return original;
}
