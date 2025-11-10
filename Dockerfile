# -----------------------------------------------------------------------------
# Dockerfile for Next.js (npm) Local Development
# -----------------------------------------------------------------------------
# このDockerfileは、Next.jsのローカル開発サーバーを起動するためのものです。

# --- 1. ベースイメージ ---
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS base

# --- 2. 作業ディレクトリの設定 ---
WORKDIR /app

# --- 3. 依存関係のインストール ---
# 依存関係ファイル (package.json と package-lock.json) をコピー
COPY package.json package-lock.json ./

# 'npm ci' は 'package-lock.json' に基づいて依存関係をクリーンインストール
# (CI/Docker環境では 'npm install' より高速で確実です)
RUN npm ci

# --- 4. アプリケーションコードのコピー ---
# プロジェクトの残りのファイルをコピーします
COPY . .

# --- 5. ポートの開放 ---
# Next.js のデフォルト開発ポートを開放します
EXPOSE 3000

# --- 6. 開発サーバーの起動 ---
# 'npm run dev' で Next.js 開発サーバーを起動します
CMD ["npm", "run", "dev"]


