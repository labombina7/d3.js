import json
import sys
import networkx as nx


nodes = list()
nodes_ref = dict()
links = list()
results = dict()

red = nx.read_gexf(sys.argv[1],node_type=dict)

print type(red.nodes())
for node in red.nodes():
    print node
    sys.exit(0)
    #node_aux = {"name":node[1]['label'],"img":node[1]['photo_url'],"centralidad":node[1]['fk_betweenness']}
    node_aux = {"name":node[1]['label']}
    nodes.append(node_aux)
    nodes_ref[node[0]] = len(nodes)-1

for link in red.edges():
    print link
    #link_aux = {"source":nodes_ref[link[0]],"target":nodes_ref[link[1]],"text":link[2]["text"]}
    link_aux = {"source":nodes_ref[link[0]],"target":nodes_ref[link[1]]}
    links.append(link_aux)


red_d3 = {"nodes":nodes,"edges":links}

json.dump(red_d3,open(sys.argv[2],'w'),indent=4)
