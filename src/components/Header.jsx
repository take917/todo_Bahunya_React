import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="add">
          <a>TODO追加</a>
        </Link>
      </nav>

      <h2>TODO：２件</h2>
    </header>
  );
};
