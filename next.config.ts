import type { NextConfig } from 'next';

import initializeBundleAnalyzer from '@next/bundle-analyzer';

import createNextIntlPlugin from 'next-intl/plugin';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

// https://www.npmjs.com/package/next-intl
const withNextIntl = createNextIntlPlugin();

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig: NextConfig = {
    output: 'standalone'
};

// Merge the plugins
const compose =
    (...fns: Function[]) =>
    (config: NextConfig) =>
        fns.reduceRight((acc, fn) => fn(acc), config);

export default compose(withBundleAnalyzer, withNextIntl)(nextConfig);
