import { cookies } from 'next/headers';

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const cookieLang = (await cookies()).get('NEXT_LOCALE')?.value || 'vi';

    return {
        locale: cookieLang,
        messages: (await import(`../../messages/${cookieLang}.json`)).default
    };
});
