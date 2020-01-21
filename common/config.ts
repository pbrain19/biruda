export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgres://ozgknkxymsmihz:132bac14926e83ed9db1a5d80fba4216a5cd73c316a83746f069d1cda1a993c4@ec2-107-21-235-87.compute-1.amazonaws.com:5432/d7bt0archdinll',
};
