function generateTags() {
    const orderNo = document.getElementById('orderNo').value;
    const customer = document.getElementById('customer').value;
    const delivery = document.getElementById('delivery').value;
    const tagsContainer = document.getElementById('tags');
    
    tagsContainer.innerHTML = '';

    if (!orderNo || !customer) {
        alert("Please enter Order No and Customer Name");
        return;
    }

    function formatDate(dateStr) {
        if (!dateStr) return "---";
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear().toString().slice(-2);

        let suffix = 'th';
        if (day % 10 === 1 && day !== 11) suffix = 'st';
        else if (day % 10 === 2 && day !== 12) suffix = 'nd';
        else if (day % 10 === 3 && day !== 13) suffix = 'rd';

        return `${day}${suffix} ${month} ${year}`;
    }

    const formattedDate = formatDate(delivery);

    const dcTotal = parseInt(document.getElementById('dcQty').value) || 0;
    const starchCount = parseInt(document.getElementById('dcStarchQty').value) || 0;
    const starchType = document.getElementById('dcStarchType').value || 'M';
    
    const wi = parseInt(document.getElementById('wiQty').value) || 0;
    const wf = parseInt(document.getElementById('wfQty').value) || 0;
    const si = parseInt(document.getElementById('siQty').value) || 0;
    const pol = parseInt(document.getElementById('polishQty').value) || 0;

    const totalPcs = dcTotal + wi + wf + si + pol;
    let currentNum = 1;

    function render(label) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            <div class="bml-head">BML</div>
            <div class="order-line">${orderNo}</div>
            <div class="cust-name">${customer.toUpperCase()}</div>
            <div class="service-line">${label}</div>
            <div class="count-line">TP: ${currentNum} / ${totalPcs}</div>
            <div class="date-line">${formattedDate}</div>
        `;
        tagsContainer.appendChild(tag);
        currentNum++;
    }

    for (let i = 1; i <= dcTotal; i++) {
        let label = (i <= starchCount) ? `DC ST-${starchType}` : `DC`;
        render(label);
    }
    for (let i = 1; i <= wi; i++) render('W&I');
    for (let i = 1; i <= wf; i++) render('W&F');
    for (let i = 1; i <= si; i++) render('S.IRON');
    for (let i = 1; i <= pol; i++) render('POL');
}

function printTags() { window.print(); }
function refreshPage() { location.reload(); }
