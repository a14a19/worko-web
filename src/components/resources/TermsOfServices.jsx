import "./Resources.css";

function TermsOfServices() {
    return (
        <div style={{ backgroundColor: '#09090F', minHeight: 'auto', width: 'auto', padding: '0', margin: '0', boxSizing: 'border-box' }}>
            <div style={{ padding: "10vw 0", maxWidth: "1140px", margin: "auto" }} >
                <h1 style={{ color: "#FFFFFF", fontSize: '35px', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>Terms of Service</h1>
                <p className='para'>Date: September 27, 2023</p>
                <h2 className='title'>Acceptance of Terms</h2>
                <p className='para'>Welcome to Worko, a task management platform provided by [Your Company Name] ("we," "our," or "us"). By accessing or using Worko, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please refrain from using Worko.</p>
                <h2 className='title'>Use of Worko</h2>
                <ul className='para'>
                    <li>You agree to use Worko for lawful purposes and in compliance with all applicable laws and regulations.</li>
                    <li>You may not engage in any behavior that disrupts or interferes with the operation of Worko.</li>
                    <li>We reserve the right to suspend or terminate your access to Worko for violations of these terms.</li>
                </ul>
                <h2 className='title'>Privacy Policy</h2>
                <p className='para'>Your use of Worko is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. You can review our Privacy Policy [here](insert link).</p>
                <h2 className='title'>User Responsibilities</h2>
                <ul className='para'>
                    <li>You are responsible for the security of your Worko account and any activities that occur under your account.</li>
                    <li>You may not share your Worko login credentials or access another user's account.</li>
                    <li>You may not use Worko in a manner that infringes upon the rights of others or violates any applicable laws.</li>
                </ul>
                <h2 className='title'>Intellectual Property</h2>
                <p className='para'>Worko contains proprietary content, trademarks, and intellectual property that are protected by copyright and other laws. You may not use Worko's content without our explicit consent.</p>
                <h2 className='title'>Third-party Links</h2>
                <p className='para'>Worko may contain links to third-party websites or services not operated by us. We are not responsible for the content, privacy practices, or terms of such third-party sites.</p>
                <h2 className='title'>Termination</h2>
                <p className='para'>We reserve the right to terminate or suspend your access to Worko without prior notice for any violation of these terms or for any other reason we deem appropriate.</p>
                <h2 className='title'>Disclaimers</h2>
                <ul className='para'>
                    <li>Worko is provided "as is" without warranties of any kind, whether expressed or implied.</li>
                    <li>We are not liable for any damages or losses resulting from your use of Worko.</li>
                </ul>
                <h2 className='title'>Governing Law</h2>
                <p className='para'>These Terms of Service are governed by the laws of Worko.</p>
                <h2 className='title'>Changes to This Agreement</h2>
                <p className='para'>We may update these Terms of Service from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Terms of Service on our website.</p>
            </div>


        </div>
    )
}

export default TermsOfServices;