function generateTags() {
    const orderNo = document.getElementById('orderNo').value;
    const customer = document.getElementById('customer').value;
    const delivery = document.getElementById('delivery').value;
    const tagsContainer = document.getElementById('tags');
    
    tagsContainer.innerHTML = '';

    if (!orderNo || !customer) {
        alert("Please fill in Order # and Name");
        return;
    }

    const services = [
        { id: 'dcQty', label: 'DRY CLEAN', starch: true },
        { id: 'wiQty', label: 'WASH & IRON' },
        { id: 'wfQty', label: 'WASH & FOLD' },
        { id: 'siQty', label: 'STEAM IRON' },
        { id: 'polishQty', label: 'POLISH' }
    ];

    services.forEach(service => {
        const qty = parseInt(document.getElementById(service.id).value) || 0;
        const starchVal = service.starch ? document.getElementById('dcStarchType').value : "";

        for (let i = 1; i <= qty; i++) {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'tag';

            tagDiv.innerHTML = `
                <div class="bml-head">BML</div>
                <div class="order-line">#${orderNo}</div>
                <div class="cust-name">${customer}</div>
                <div class="service-line">${service.label} ${starchVal ? '('+starchVal+')' : ''}</div>
                <div class="count-line">PCS: ${i} / ${qty}</div>
                <div class="date-line">DEL: ${delivery || '---'}</div>
            `;
            tagsContainer.appendChild(tagDiv);
        }
    });
}

function printTags() {
    if (document.querySelectorAll('.tag').length === 0) {
        alert("Generate tags first!");
        return;
    }
    window.print();
}

function refreshPage() {
    if(confirm("Clear data?")) window.location.reload();
}
