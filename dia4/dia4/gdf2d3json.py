import json
import sys


with open(sys.argv[1],'r') as source_file:
    lines = source_file.readlines()


nodes = list()
nodes_ref = dict()
edges = list()
nodes_flag = 1
count = 0
for line in lines[1:]:
    if line[:4] != 'edge':
        line = line.strip()
        print line
        if nodes_flag==1:
            line_parts = line.split(',')
            print len(line_parts)
            #node_aux = {'name':line_parts[1],'genero':line_parts[2],'lang':line_parts[3]}
            node_aux = {'name':line_parts[0],'label':line_parts[1]}
            nodes.append(node_aux)
            nodes_ref[line_parts[0]] = len(nodes) - 1

        else:
            line_parts = line.split(",")
            edge_aux = {'source':nodes_ref[line_parts[0]],'target':nodes_ref[line_parts[1]]}
            #edge_aux = {'source':nodes_ref[line_parts[0]],'target':nodes_ref[line_parts[1]],'weight':line_parts[2]}
            edges.append(edge_aux)

    else:
        nodes_flag = 0

results = {"nodes":nodes,"edges":edges}
json.dump(results,open(sys.argv[2],'w'),indent=4)
