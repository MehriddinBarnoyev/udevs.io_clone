import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout />;
    </div>
  );
}
