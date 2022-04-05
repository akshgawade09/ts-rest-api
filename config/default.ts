export default {
    port: 1337,
    dbURI: "mongodb://localhost:27017/ts-rest-api",
    saltWorkFactor: 10,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALV8jsRmy2RsF6rPIcuCbY0oYet3jlO3
    svQ7MgK8r34XME6pvpdUXCbYNIq1kxzL6WEd/PHEaWT+0pQsXMRHyLMCAwEAAQ==
    -----END PUBLIC KEY-----`.replace(/\n\s+/g, "\n"),
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBPQIBAAJBALV8jsRmy2RsF6rPIcuCbY0oYet3jlO3svQ7MgK8r34XME6pvpdU
    XCbYNIq1kxzL6WEd/PHEaWT+0pQsXMRHyLMCAwEAAQJBAJbn8VaCGxFvh+ZxwSoV
    U76SG4nNqb0W/Gh0aEs6VbpDaDd/kHf0A3nWmUlOeYiy1qOKRjaEIrisO8c2FhBg
    TwECIQD2MtFeMWE4TTzL47ZEmhTYYOLaABFmp8zjj4u8y/Vd8wIhALy2Nv1cuwEi
    XZ5WveaD701ArheLLHEuALCH8KP/ntpBAiEAsrEZs0Ml7CZrPRUuwsYO4SoZHN81
    wguCs5wJcWOb2K8CIQCBk3xeq/Wb6cTunBD4307JdMgVUnLJpBTFIhKSCUtCAQIh
    ALzgSUjGF46Z0eYWYXDin0tLG1HWDeAarpHp2yX1BuQj
    -----END RSA PRIVATE KEY-----`.replace(/\n\s+/g, "\n"),
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
}