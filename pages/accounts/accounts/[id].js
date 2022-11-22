import api from "../../api/api";

const AccountDetailPage = () => {
    return (
        <div>
            <h3>Hello</h3>
        </div>
    )
};


export async function getServerSideProps({params}) {
    const account_fetch_url = await api.get(`/transactions/${session_data.user?.madrasha_slug}/student-income/`);
    const account_res = await fetch(account_fetch_url);
    const account_detail = await account_res.json();
    return {
        props: {
            "account_detail": account_detail
        }
    }
}


export default AccountDetailPage;