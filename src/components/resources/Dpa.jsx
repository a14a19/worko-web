import "./Resources.css";

function Dpa() {
    return (
        <div style={{ backgroundColor: '#09090F', minHeight: 'auto', width: 'auto', padding: '0', margin: '0', boxSizing: 'border-box' }}>
            <div style={{ padding: "10vw 0", maxWidth: "1140px", margin: "auto" }} >
                <h1 style={{ color: "#FFFFFF", fontSize: '35px', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}>Data Processing Agreement</h1>
                <p className='para'>Date: September 27, 2023<br /><br />
                    This Data Processing Agreement (the &quot;Agreement&quot;) is entered into by and between:<div />
                    <b>Your Company Name</b>, a company registered under the laws of <b>Your Country</b>, having its registered office at <b>Your Address</b> (&quot;Processor&quot;)</p>
                <p className='para'><b>Customer Name</b>, a company registered under the laws of <b>Customer's Country</b>, having its registered office at <b>Customer&quot;s Address</b> (&quot;Controller&quot;).</p>
                <p className='para'>(hereinafter collectively referred to as the &quot;Parties&quot;).</p>
                <h2 className='title'>Background</h2>
                <ol className='para list-decimal'>
                    <li><b>The Controller</b> is a user of Worko, a task management platform, and processes personal data of individuals ("Data Subjects") within the platform.</li>
                    <li><b>The Processor</b> provides the Worko platform to the Controller and processes personal data on behalf of the Controller as part of its services.</li>
                    <li>The Parties desire to ensure that personal data is processed in compliance with applicable data protection laws, including but not limited to the General Data Protection Regulation (GDPR).</li>
                </ol>
                <h2 className='title'>Definitions</h2>
                <ul className='para'>
                    <li>"GDPR" means the General Data Protection Regulation (EU) 2016/679.</li>
                    <li>"Personal Data" shall have the meaning as defined in the GDPR.</li>
                    <li>"Processing" shall have the meaning as defined in the GDPR.</li>
                </ul>
                <h2 className='title'>Data Processing Terms</h2>
                <ol className='para'>
                    <li><h3>Scope and purpose of Processing</h3>The Processor shall process Personal Data on behalf of the Controller solely for the purpose of providing the services specified in the applicable agreement between the Parties.</li>
                    <li><h3>Data Subject Rights</h3>The Processor shall provide assistance to the Controller in responding to Data Subjects' requests to exercise their rights under the GDPR, including access, rectification, erasure, and data portability.</li>
                    <li><h3>Data Security</h3>The Processor shall implement appropriate technical and organizational measures to ensure the security and confidentiality of Personal Data. These measures shall comply with the requirements of the GDPR.</li>
                    <li><h3>Data Transfers</h3>Any transfer of Personal Data outside the European Economic Area (EEA) shall comply with the requirements of the GDPR and shall only be performed with the Controller's prior consent.</li>
                    <li><h3>Sub-processors</h3>The Processor may engage sub-processors to perform specific processing activities. The Processor shall ensure that such sub-processors are bound by data protection obligations consistent with the terms of this Agreement.</li>
                    <li><h3>Confidentiality</h3>The Processor shall ensure that all personnel processing Personal Data are subject to confidentiality obligations.</li>
                    <li><h3>Data Breach Notification</h3>The Processor shall promptly notify the Controller in case of a Personal Data breach.</li>
                </ol>
                <h2 className='title'>Duration and Termination</h2>
                <p className='para'>This Agreement shall remain in effect for the duration of the processing activities as specified in the underlying agreement between the Parties. Upon termination or completion of processing, the Processor shall delete or return all Personal Data to the Controller, as specified in the underlying agreement.</p>
                <h2 className='title'>Governing Law</h2>
                <p className='para'>This Agreement shall be governed by and construed in accordance with the laws of Your Country.</p>
                <h2 className='title'>Execution</h2>
                <p className='para'>This Agreement may be executed in any number of counterparts, each of which shall be deemed an original and all of which together shall constitute one and the same instrument.</p>
            </div>


        </div>
    )
}

export default Dpa