import { FunctionComponent } from 'react';
import "./tableComponent.css"


const TableComponent:FunctionComponent = () => {
  	return (
		<div className="table-wrapper">
			<div className="tableColumnParent">
      			<div className="tableColumn">
        				<div className="table">
          					<b className="name">Name</b>
        				</div>
        				<div className="table2">
          					<div className="name">John Doe</div>
        				</div>
        				<div className="table2">
          					<div className="name">John Doe</div>
        				</div>
        				<div className="table2">
          					<div className="name">John Doe</div>
        				</div>
      			</div>
      			<div className="tableColumn2">
        				<div className="table">
          					<b className="name">Fingerprint</b>
        				</div>
        				<div className="table2">
          					<div className="name">133E AC17 9436 F14A 5CF1  B794 860F EB80 4E66 9320</div>
        				</div>
        				<div className="table2">
          					<div className="name">133E AC17 9436 F14A 5CF1  B794 860F EB80 4E66 9320</div>
        				</div>
        				<div className="table2">
          					<div className="name">133E AC17 9436 F14A 5CF1  B794 860F EB80 4E66 9320</div>
        				</div>
      			</div>
    		</div>
		</div>);
};

export default TableComponent;
