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

    // 1. Get All Quantities
    const dcTotal = parseInt(document.getElementById('dcQty').value) || 0;
    const starchCount = parseInt(document.getElementById('dcStarchQty').value) || 0;
    const starchType = document.getElementById('dcStarchType').value || 'M';
    
    const wi = parseInt(document.getElementById('wiQty').value) || 0;
    const wf = parseInt(document.getElementById('wfQty').value) || 0;
    const si = parseInt(document.getElementById('siQty').value) || 0;
    const pol = parseInt(document.getElementById('polishQty').value) || 0;

    // 2. Calculate TOTAL PCS (Starch is part of DC, so it is not added again)
    const totalPcs = dcTotal + wi + wf + si + pol;
    let currentNum = 1;

    // Helper function to build the individual tag
    function render(label) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            <div class="bml-head">BML</div>
            <div class="order-line">#${orderNo}</div>
            <div class="cust-name">${customer.toUpperCase()}</div>
            <div class="service-line">${label}</div>
            <div class="count-line">PCS: ${currentNum} / ${totalPcs}</div>
            <div class="date-line">DEL: ${delivery || '---'}</div>
        `;
        tagsContainer.appendChild(tag);
        currentNum++;
    }

    // 3. Generate DC Tags (Apply starch logic to the first X items)
    for (let i = 1; i <= dcTotal; i++) {
        let label = (i <= starchCount) ? `DC ST-${starchType}` : `DC`;
        render(label);
    }

    // 4. Generate Other Tags sequentially
    for (let i = 1; i <= wi; i++) render('W&I');
    for (let i = 1; i <= wf; i++) render('W&F');
    for (let i = 1; i <= si; i++) render('S.IRON');
    for (let i = 1; i <= pol; i++) render('POL');
}

function printTags() {
    if (document.querySelectorAll('.tag').length === 0) {
        alert("Generate tags first!");
        return;
    }
    window.print();
}

function refreshPage() {
    if(confirm("Clear all data?")) window.location.reload();
}
